
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        users: async () => {
          return User.find();
        },
    
        user: async (parent, { userId }) => {
          return User.findOne({ _id: userId });
        },
        me: async (parent, args, context) => {
          console.log("context.user " + context.user);
          if (context.user) {
            return User.findOne({ _id: context.user._id });
          }
          throw new AuthenticationError('You need to be logged in!');
        },
    
    },

    Mutation: {
        addUser: async (parent, { userName, email, password }) => {
          const user = await User.create({ userName, email, password });
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { userName, password }) => {
          const user = await User.findOne({ userName });
    
          if (!user) {
            throw new AuthenticationError('No profile with this email found!');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(user);
          return { token, user };
        },
        updateUser: async (parent, { userName, email, password, userId }, context) =>{
          if (context.user) {
            User.findOne({ _id: context.user._id }, async (err, currentUser) => {
              console.log(currentUser)

              console.log(password + " vs. " + currentUser.password)
              if(password != currentUser.password) {
                console.log('Password has been changed!')
                password = await bcrypt.hash(password, 10);
              }  else {
                password = currentUser.password
              }
    
              return User.findOneAndUpdate(
                {_id:userId},
                {
                  userName:userName,
                  email:email,
                  password: password
                },
                {
                  new: true,
                  runValidators: true,
                }
    
              )
            });

          
          
        }

        },
        
        deleteUser: async(parent, {userId}) =>{
          return User.findOneAndDelete({ _id: userId });
        }
    },
}
module.exports = resolvers;

