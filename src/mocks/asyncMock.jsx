const productos = [
    {
        id: '01',
        name: 'Cuadro DS1',
        description: 'Cuadro decorativo con imagen de Demon Slayer, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90m de altura.',
        stock: 8,
        price: 62000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/YqHLCXT1/cua_1.jpg'
    },
    {
        id: '02',
        name: 'Cuadro TG1',
        description: 'Cuadro decorativo con imagen de Tokyo Ghoul, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90m de altura.',
        stock: 5,
        price: 70000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/ncGjj4J8/cua_2.jpg'
        
    },
    {
        id: '03',
        name: 'Cuadro DB1',
        description: 'Cuadro decorativo con imagen de Dragon Ball, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90m de altura.',
        stock: 16,
        price: 53000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/RVL667zk/cua_3.jpg'
    },
    {
        id: '04',
        name: 'Cuadro AT1',
        description: 'Cuadro decorativo con imagen de Attack On Titan, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90m de altura.',
        stock: 7,
        price: 75000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/fTfttcNn/cua4.jpg'
    },
    {
        id: '05',
        name: 'Cuadro SAO1',
        description: 'Cuadro decorativo con imagen de Sword Art Online, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90m de altura.',
        stock: 12,
        price: 63000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/CLsBBGgV/cua5.jpg'
    },
    {
        id: '06',
        name: 'Figura AT1',
        description: 'Figura de Eren Jaeger versión titán, personaje principal de Attack On Titan. La figura mide 30cm de altura y está hecha de PVC.',
        stock: 30,
        price: 95000,
        category: 'figuras',
        img: 'https://i.postimg.cc/sDs1rMZh/atk.jpg'
    },
    {
        id: '07',
        name: 'Figura AT2',
        description: 'Figura de Eren Jaeger versión legión, personaje principal de Attack On Titan. La figura mide 30cm de altura y está hecha de PVC.',
        stock: 25,
        price: 90000,
        category: 'figuras',
        img: 'https://i.postimg.cc/L62hpJZJ/atk_2.jpg'
    },
    {
        id: '08',
        name: 'Figura DB1',
        description: 'Figura de Goku versión Super Saiyajin, personaje principal de Dragon Ball. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 40,
        price: 85000,
        category: 'figuras',
        img: 'https://i.postimg.cc/bNpdhZ2D/db.jpg'
    },
    {
        id: '09',
        name: 'Figura DB2',
        description: 'Figura de Vegeta, personaje principal de Dragon Ball. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 35,
        price: 80000,
        category: 'figuras',
        img: 'https://i.postimg.cc/Hsdjgr78/db3.jpg'
    },
    {
        id: '10',
        name: 'Figura DB3',
        description: 'Figura de Majin Boo, personaje principal de Dragon Ball. La figura mide 25cm de altura y está hecha de PVC.', 
        stock: 20,
        price: 75000,
        category: 'figuras',
        img: 'https://i.postimg.cc/PrTNjC8Y/db7.jpg'
    },
    {
        id: '11',
        name: 'Figura DS1',
        description: 'Figura de Tanjiro, personaje principal de Demon Slayer. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 25,
        price: 85000,
        category: 'figuras',
        img: 'https://i.postimg.cc/FsN14YJj/demon_3.jpg'
    },
    {
        id: '12',
        name: 'Figura DS2',
        description: 'Figura de Tanjiro y Nezuko, personajes principales de Demon Slayer. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 30,
        price: 120000,
        category: 'figuras',
        img: 'https://i.postimg.cc/3JYWTkDX/demon_7.jpg'
    },
    {
        id: '13',
        name: 'Figura NS1',
        description: 'Figura de Naruto, personaje principal de Naruto. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 40,
        price: 85000,
        category: 'figuras',
        img: 'https://i.postimg.cc/8PNsS7rL/naruto_2.jpg'
    },
    {
        id: '14',
        name: 'Figura NS2',
        description: 'Figura de Itachi, personaje principal de Naruto. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 35,
        price: 98000,
        category: 'figuras',
        img: 'https://i.postimg.cc/kXqDm2tv/naruto_3.jpg'
    },
    {
        id: '15',
        name: 'Figura NS3',
        description: 'Figura de Itachi y Sasuke, personajes principales de Naruto. La figura mide 25cm de altura y está hecha de PVC.',
        stock: 20,
        price: 115000,
        category: 'figuras',
        img: 'https://i.postimg.cc/15s4Q8NK/naruto_5.jpg'
    },
    {
        id: '16',
        name: 'Peluche PK1',
        description: 'Peluche del Pokemon Bulbasor. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 30,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/g20Jx1s6/peluche_bulbasor.jpg'
    },
    {
        id: '17',
        name: 'Peluche PK2',
        description: 'Peluche del Pokemon Eevee. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 25,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/ht3GTMZ1/peluche_eeve.jpg'
    },
    {
        id: '18',
        name: 'Peluche PK3',
        description: 'Peluche del Pokemon Lapras. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 30,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/W1f4gSY8/peluche_lapras.jpg'
    },
    {
        id: '19',
        name: 'Peluche PK4',
        description: 'Peluche del Pokemon Marowak. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 25,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/rwYpxgZg/peluche_marowak.jpg'
    },
    {
        id: '20',
        name: 'Peluche PK5',
        description: 'Peluche del Pokemon Charizard. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 30,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/N09j4TW9/Peluche_Charizard.jpg'
    },
    {
        id: '21',
        name: 'Peluche PK6',
        description: 'Peluche del Pokemon Pikachu. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 30,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/LsY8TfrJ/peluche_pikachu.jpg'
    },
    {
        id: '22',
        name: 'Peluche PK7',
        description: 'Peluche del Pokemon Snorlax. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 25,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/MGMpDRhc/peluche_snorlax.jpg'
    },
    {
        id: '23',
        name: 'Peluche PK8',
        description: 'Peluche del Pokemon Squirtle. El peluche mide 20cm de altura y está hecho de algodón.',
        stock: 30,
        price: 12000,
        category: 'peluches',
        img: 'https://i.postimg.cc/vHY8KCJw/peluche_squa.jpg'
    },
    {
        id: '24',
        name: 'Remera DN1',
        description: 'Remera estampada con imagen de Death Note. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 50,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/6q0W3hGY/rem_ele.jpg'
    },
    {
        id: '25',
        name: 'Remera NS1',
        description: 'Remera estampada con imagen de Naruto. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 40,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/yxP1dTSQ/rem_na.jpg'
    },
    {
        id: '26',
        name: 'Remera NS2',
        description: 'Remera estampada con imagen de Naruto. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 38,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/KjNGz5g0/rem_nar.jpg'
    },
    {
        id: '27',
        name: 'Remera NS3',
        description: 'Remera estampada con imagen de Naruto. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 35,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/T19dwcWH/rem_nara.jpg'
    },
    {
        id: '28',
        name: 'Remera NS4',
        description: 'Remera estampada con imagen de Naruto. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 30,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/SRrSsGz5/rem_naru.jpg'
    },
    {
        id: '29',
        name: 'Remera NS5',
        description: 'Remera estampada con imagen de Naruto. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 32,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/VvRf6Fb3/rem_pain.jpg'
    },
    {
        id: '30',
        name: 'Remera OP1',
        description: 'Remera estampada con imagen de One Piece. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 40,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/sxcjXJZb/rem_one.jpg'
    },
    {
        id: '31',
        name: 'Remera OP2',
        description: 'Remera estampada con imagen de One Piece. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 35,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/ZncbRLy2/rem_one_p.jpg'
    },
    {
        id: '32',
        name: 'Remera DB1',
        description: 'Remera estampada con imagen de Dragon Ball. La remera está hecha de algodón, es talle único y es unisex.',
        stock: 40,
        price: 7500,
        category: 'remeras',
        img: 'https://i.postimg.cc/HW4sBTPT/rem_veg.jpg'
    }
]

let error = false

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error al obtener productos")
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}
export const getItem = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(error){
                rej('Hubo un error')
            }else{
                let prod = productos.find((prod) => prod.id === id)
                res(prod)
            }
        }, 2000)
    })
}