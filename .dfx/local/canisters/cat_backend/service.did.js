export const idlFactory = ({ IDL }) => {
  const userRole = IDL.Variant({ 'User' : IDL.Null, 'Seller' : IDL.Null });
  const Identifier = IDL.Record({
    'account_id' : IDL.Text,
    'principal' : IDL.Principal,
  });
  const user = IDL.Record({
    'userType' : userRole,
    'bisnessDescription' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'identifier' : Identifier,
  });
  return IDL.Service({
    'createUser' : IDL.Func([IDL.Text, userRole, IDL.Text], [IDL.Text], []),
    'listUsers' : IDL.Func([], [IDL.Vec(user)], ['query']),
    'updateUser' : IDL.Func(
        [IDL.Text, IDL.Text, userRole, IDL.Text],
        [IDL.Text],
        [],
      ),
    'whaomi' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
