import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Identifier { 'account_id' : string, 'principal' : Principal }
export interface user {
  'userType' : userRole,
  'bisnessDescription' : [] | [string],
  'name' : string,
  'identifier' : Identifier,
}
export type userRole = { 'User' : null } |
  { 'Seller' : null };
export interface _SERVICE {
  'createUser' : ActorMethod<[string, userRole, string], string>,
  'listUsers' : ActorMethod<[], Array<user>>,
  'updateUser' : ActorMethod<[string, string, userRole, string], string>,
  'whaomi' : ActorMethod<[], string>,
}
