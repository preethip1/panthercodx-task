import { atom } from 'recoil';

export const userListState = atom({
    key: 'users',
    default: "[]",
});