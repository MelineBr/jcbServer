const users = [
    {
        nom : "joris",
         prenom: 'joris', 
         email:'', 
         role, 
         service, 
         projets, 
         motDePasse
    },
    // Add more users as needed
];

const userModel = {
    getUserByUsername(username) {
        return users.find(user => user.username === username);
    },
    getAllUsers() {
        return users.map((user => user.username));
    },
    getUserByEmail(mail){
return 
    },
};

module.exports = userModel;