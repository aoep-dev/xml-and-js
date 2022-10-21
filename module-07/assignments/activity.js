const data = 
    [
        {
            "id": 1,
            "first_name": "Husain",
            "last_name": "Zeale",
            "email": "hzeale0@odnoklassniki.ru",
            "gender": "Male",
            "ip_address": "143.237.191.245"
        },
        {
            "id": 2,
            "first_name": "Michale",
            "last_name": "Delgado",
            "email": "mdelgado1@paginegialle.it",
            "gender": "Male",
            "ip_address": "144.2.126.19"
        },
        {
            "id": 3,
            "first_name": "Gaspard",
            "last_name": "Upwood",
            "email": "gupwood2@fastcompany.com",
            "gender": "Male",
            "ip_address": "147.85.27.165"
        },
        {
            "id": 4,
            "first_name": "Gussy",
            "last_name": "Dowzell",
            "email": "gdowzell3@ox.ac.uk",
            "gender": "Male",
            "ip_address": "22.201.167.239"
        },
        {
            "id": 5,
            "first_name": "Alida",
            "last_name": "Macias",
            "email": "amacias4@slate.com",
            "gender": "Female",
            "ip_address": "166.62.41.24"
        },
        {
            "id": 6,
            "first_name": "Tess",
            "last_name": "Sainte Paul",
            "email": "tsaintepaul5@xinhuanet.com",
            "gender": "Female",
            "ip_address": "58.80.74.111"
        },
        {
            "id": 7,
            "first_name": "Germaine",
            "last_name": "Winnett",
            "email": "gwinnett6@parallels.com",
            "gender": "Genderqueer",
            "ip_address": "224.15.42.167"
        },
        {
            "id": 8,
            "first_name": "Mei",
            "last_name": "Swansbury",
            "email": "mswansbury7@uol.com.br",
            "gender": "Female",
            "ip_address": "191.235.203.177"
        },
        {
            "id": 9,
            "first_name": "Brietta",
            "last_name": "Greenfield",
            "email": "bgreenfield8@qq.com",
            "gender": "Male",
            "ip_address": "72.108.253.70"
        },
        {
            "id": 10,
            "first_name": "Guinna",
            "last_name": "Dagnan",
            "email": "gdagnan9@thetimes.co.uk",
            "gender": "Female",
            "ip_address": "108.233.202.64"
        }
    ]

const parsed = data.map((object) => {
    return {
        id: object.id,
        firstName: object.first_name,
        lastName: object.last_name,
        email: object.email,
        gender: object.gender,
        ipAddress: object.ip_address
    }
});
console.log(`~~~~~~~~~~~~~~`);
console.log(`Parsed:`);    
console.log(parsed);

const filtered = parsed.filter((object) => object.id > 5);

console.log(`~~~~~~~~~~~~~~`);
console.log(`Filtered:`);
console.log(filtered);

