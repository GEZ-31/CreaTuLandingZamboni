const productos = [
    {
        id: '01',
        name: 'Cuadro DS1',
        description: 'Cuadro decorativo con imagen de Demon Slayer, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90 de altura.',
        stock: 8,
        price: 62000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/YqHLCXT1/cua_1.jpg'
    },
    {
        id: '02',
        name: 'Cuadro TG1',
        description: 'Cuadro decorativo con imagen de Tokyo Ghoul, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90 de altura.',
        stock: 5,
        price: 70000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/ncGjj4J8/cua_2.jpg'
        
    },
    {
        id: '03',
        name: 'Cuadro DB1',
        description: 'Cuadro decorativo con imagen de Dragon Ball, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90 de altura.',
        stock: 16,
        price: 53000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/RVL667zk/cua_3.jpg'
    },
    {
        id: '04',
        name: 'Cuadro AT1',
        description: 'Cuadro decorativo con imagen de Attack On Titan, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90 de altura.',
        stock: 7,
        price: 75000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/fTfttcNn/cua4.jpg'
    },
    {
        id: '05',
        name: 'Cuadro SAO1',
        description: 'Cuadro decorativo con imagen de Sword Art Online, consta de cinco rectángulos para colgar. El material es madera laminada y las medidas del cuadro armado son 1,5m de ancho y 0,90 de altura.',
        stock: 12,
        price: 63000,
        category: 'cuadros',
        img: 'https://i.postimg.cc/CLsBBGgV/cua5.jpg'
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