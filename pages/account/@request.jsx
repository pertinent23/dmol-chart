import axios from "axios";

export default async function getUserData() {
    return {
        username: '@test',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        birth: '',
        adress: '',
        profil: '/img/user/user1.svg',
        city: '',
        about: '',
        role: 'admin'
    };
};