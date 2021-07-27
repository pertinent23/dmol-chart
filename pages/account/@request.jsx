import axios from "axios";

export default async function getUserData() {
    return {
        username: '@test',
        password: '',
        email: null,
        first_name: null,
        last_name: null,
        birth: null,
        adress: null,
        profil: '/img/user/user1.svg',
        city: null,
        about: null
    };
};