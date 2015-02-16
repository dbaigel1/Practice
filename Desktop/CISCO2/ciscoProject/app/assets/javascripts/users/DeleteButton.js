function DeleteUser(user)
{
db.runCommand( { dropUser: "user"
                 } );
}