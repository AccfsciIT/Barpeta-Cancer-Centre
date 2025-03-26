export const HospitalID = 2; 
export const API = 'http://172.16.2.81:3001/';
export const MyAddress = 'http://172.16.2.81:3000/';
// export const HName = 'Lakhimpur/';

export const HName = () => {
    switch(HospitalID){
        case(1): return('SCI/');
        case(2): return('Lakhimpur/');
        case(3): return('Barpeta/');
        case(4): return('Darrang/');
        case(5): return('Tezpur/');
        case(6): return('Kokrajhar/');
        case(7): return('Silchar/');
        case(8): return('Dibrugarh/');
        case(9): return('Jorhat/');
    }
}