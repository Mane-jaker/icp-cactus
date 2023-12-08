import Text "mo:base/Text";
import Principal "mo:base/Principal";

module Types {
    public type Identifier = {
        account_id : Text;
        principal: Principal;
    };

    public type user = {
        name : Text;
        identifier : Identifier;
        userType : userRole;
        bisnessDescription : ?Text;
    };

    public type userInfo = {
        userName : Text;
        internetIdentity : Text;
        userType : Text;
        bisnessDescription : ?Text;
    };

    public type userRole = {
        #Seller;
        #User;
    };
};
