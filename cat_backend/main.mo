import HashMap "mo:base/HashMap";
import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Blob "mo:base/Blob";
import Hash "mo:base/Hash";
import Nat64 "mo:base/Nat64";
import Nat8 "mo:base/Nat8";
import Error "mo:base/Error";
import Types "models/types";
import Utils "external_code/Utils";


// This is the Identifiers actor that is responsible for managing the Identifiers
actor Identifier {
  
  var users : HashMap.HashMap<Text, Types.user> = HashMap.HashMap<Text, Types.user>(0, Text.equal, Text.hash);

  public shared(msg) func createUser(name : Text, usertype : Types.userRole, description : Text) : async Text {

    let principal = msg.caller;

    let newUser : Types.user = {
      name = name;
      identifier = {
        account_id = Principal.toText(principal);
        principal = principal
      };
      userType = usertype;
      bisnessDescription = ?description;
    };

    let savedUser = users.put(name, newUser);

    return "Success" ;
  };

  public shared(msg) func updateUser(name : Text, oldName : Text, usertype : Types.userRole, description : Text) : async Text {
    
    let principal = msg.caller;

    let newUser : Types.user = {
      name = name;
      identifier = {
        account_id = Principal.toText(principal);
        principal = principal
      };
      userType = usertype;
      bisnessDescription = ?description;
    };

    let oldUser = users.remove(oldName);
    let updatedUser = users.put(name, newUser); 

    return "Success";
  };

  public query func listUsers() : async [Types.user] {
    return Iter.toArray(users.vals());
  };

  
  public shared(msg) func whaomi() : async Text {
    return Principal.toText(msg.caller);
  };

  private func toAccount(p: Principal) : Text {
    return Utils.accountToText(Utils.principalToAccount(p))
  };

};
