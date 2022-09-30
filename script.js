class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }   
    get (data) {
        return this.data;
    }
    permissions = {
        edit: true,
    }
    getPermissions() {
        return this.permissions;
    }
}
//console.log(user1.getPermissions());

let user1 = new User({id: '133f13t', name: 'Olga', email: 'olga@mail.ru', address: 'Mogilev', phone: '+375291112233'});
console.log(user1);

let user2 = new User({id: '153f13t', name: 'Marina', email: 'marina@mail.ru', address: 'Minsk', phone: '+37529222233'});
console.log(user2);
  
let user3 = new User({id: '139f13t', name: 'Vika', email: 'vika@mail.ru', address: 'Minsk', phone: '+375293332233'});
console.log(user3);

let user4 = new User({id: '1573f13t', name: 'Kira', email: 'kira@mail.ru', address: 'Mogilev', phone: '+375294442233'});
console.log(user4);

let user5 = new User({id: '14563f13t', name: 'Vladislava', email: 'vladislava@mail.ru', address: 'Mogilev', phone: '+375295552233'});
console.log(user5);


class Contacts  extends User {
    
}
