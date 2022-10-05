const products = [
    { 
        id: '1', name: 'Zapatillas Nike Air Max Dawn', price: 49599, free_shipping: true, category: 'nike', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG', stock: 23, description:'Las Zapatillas Nike Air Max Dawn son ideales para tus tardes de running y tu vida diaria. Posee una cámara de aire con una estética llamativa y visible que te dará una mejor amortiguación en cada paso y mejor tracción cuando corres o caminas. Super cómodas a primera vista y a primera pisada. Con una estética cuidada y clásica que destacará cualquier look y mejorará tu confort en un 100%.'
    },

    { 
        id: '2', name: 'Zapatillas Puma Rs-Fast Limiter', price: 32599, free_shipping: false, category: 'puma', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4fcd4733/products/PU_385043-04/PU_385043-04-1.JPG', stock: 19, description:'Diseñadas para personas de vanguardia y arriesgados, las Zapatillas Puma Rs-Fast Limiter cuentan con una onda retro con elementos gráficos de gran tamaño, a la vez que te imprimen una combinación de materiales y herramientas que te harán lucir cómodo y un paso más allá de todos. Su entresuela en EVA te da pasos más amortiguados, ligeros y con mejor resistencia a impactos. Lucí con orgullo un modelo pensado para destacarte entre la multitud, con colores audaces y toda la onda de Puma.'
    },

    { 
        id: '3', name: 'Zapatillas Adidas Forum Low', price: 38849, free_shipping: false, category: 'adidas', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd3ca6ba6/products/AD_FY7756/AD_FY7756-1.JPG', stock: 16, description:'Con un estilo urbano y para recorrer diferentes lugares, las zapatillas Adidas Forum Low están confeccionadas en cuero sintético y suela de goma para un mayor agarre sobre la superficie. Su ajuste con cordones y velcro le dan un toque retro, inspirado en 1984 cuando las Forum salieron por primera vez a conquistar canchas de básquet y el mundo del hip-hop. Usalas todo el día, las calles de tu ciudad las estaban esperando.'
    },

    { 
        id: '4', name: 'Zapatillas Nike Air Max 95 Se', price: 71799, free_shipping: true, category: 'nike', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb3ab84a9/products/NI_DH4755-001/NI_DH4755-001-1.JPG', stock: 21, description:'Las Zapatillas Nike Air Max 95 Se mezclan colores frescos de primavera y detalles bordados que dan un look único y particularmente llamativo. Algo muy importante de estas zapatillas, es que están confeccionadas con un 20% de material reciclado por peso. Es decir que, además de verte bien y sentirte cómoda, llevarás la marca sustentable a donde quiera que vayas. Los paneles laterales de lona reciclada representan la fuerza y al mismo tiempo, la unidad Air visible en el talón y antepié, amortigua tu viaje. ¡Identificate con un camino hacia cero carbono y cero desechos!'
    },

    { 
        id: '5', name: 'Zapatillas adidas Zx 2K Boost Pure', price: 40999, free_shipping: true, category: 'adidas', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw84cb7f70/products/AD_GZ7730/AD_GZ7730-1.JPG', stock: 11, description:'El diseño innovador de estas zapatillas van de la mano con ofrecer comodidad en cada pisada. Las Zapatillas adidas Zx 2K Boost estan inspiradas en el legado innovador de adidas que comenzó en los años 80. La saga ZX se adentra en el futuro con una silueta que combina un diseño vanguardista con el retorno de energía de la tecnología Boost.'
    },

    { 
        id: '6', name: 'Zapatillas Jordan Air Xxxvi Low', price: 78199, free_shipping: true, category: 'jordan', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42ef43f5/products/NI_DH0833-660/NI_DH0833-660-1.JPG', stock: 6, description:'Las Zapatillas Air Jordan 36 Low te ayudan a dar todo en cada práctica y partido de básquet. Están hechas con una serie de materiales de malla y materiales sintéticos. Tienen un tono rojo titular que va a lo largo de la parte superior, tiñendo la malla, y los paneles superpuestos. Los cordones están salpicados con un pop idéntico al logotipo adyacente de Jumpman, y a la vez, el escudo de encaje, la lengüeta y el cuello, optan por un tono más oscuro. La suela de goma con unidades Zoom Air y Dot Weld Strobel contribuyen a la amortiguación dándote un salto más alto y garantizando tracción en cada pisada. Ponételas y convertite en una estrella del básquet, por tu juego y por tu estilo.'
    },

    { 
        id: '7', name: 'Zapatillas Nike Air Huarache', price: 38999, free_shipping: false, category: 'nike', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw557863e1/products/NI_DD1068-105/NI_DD1068-105-1.JPG', stock: 33, description:'Las Zapatillas Nike Air Huarache marcan tendencia. Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.'
    },

    { 
        id: '8', name: 'Zapatillas adidas Zx 2K Boost 2.0', price: 40949, free_shipping: true, category: 'adidas', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc80da1c5/products/AD_GZ7742/AD_GZ7742-1.JPG', stock: 23, description:'Las Zapatillas adidas Zx 2K Boost 2.0 están inspiradas en la era digital y brindan todo el estilo que un nativo 2.0 necesita. Cuentan con detalles reflectantes para definir tu look, cordones y una amortiguación superior basada en su mediasuela Boost envolvente que inyecta un extra de confort a tu rutina. Tracciona tus pasos con su suela de caucho y mejora tu estabilidad con sus detalles de TPU. Llevalas y que nada frene tu rutina.'
    },

    { 
        id: '9', name: 'Zapatillas adidas NMD R1 V2 South Park', price: 44099, free_shipping: true, category: 'adidas', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw579b331e/products/AD_GY6477/AD_GY6477-1.JPG', stock: 24, description:'Inspiradas en una de las animaciones más atrevidas, las Zapatillas adidas NMD R1 V2 South Park tienen un diseño audaz para rendirle homenaje. Su capellada de cuero es duradera y está diseñada para robarse todas las miradas. La mediasuela BOOST mejora el retorno de energía y aporta una comodidad superior a tu rutina, mientras que la suela de goma brinda una tracción mayor para que tu día combine moda, diseño y confort en un solo calzado.'
    },
    
    { 
        id: '10', name: 'Zapatillas Nike Air Force 1 Gore Tex', price: 71799, free_shipping: true, category: 'nike', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42370dbb/products/NI_DO2760-220/NI_DO2760-220-1.JPG', stock: 8, description:'Las Zapatillas Nike Air Force 1 Gore Tex son el calzado diario todoterreno que buscabas. El cuero de la capellada es resistente y cuenta con una membrana GORE-TEX que las protege del agua para mantener tus pies secos durante tu jornada. La unidad Nike Air mejora tus pisadas y garantiza un andar suave y confortable y la suela de goma mejora la tracción en varias direcciones gracias a su patrón circular.'
    },

    { 
        id: '11', name: 'Zapatillas Puma Bmw Mms Maco Sl', price: 33599, free_shipping: false, category: 'puma', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf4fffab9/products/PU_306995-02/PU_306995-02-1.JPG', stock: 30, description:'Las Zapatillas Puma Bmw Mms Maco Sl llevan tu pasión por los motores a la ciudad. Su combinación de colores le da un aire elegante impecable, sin perder modernidad. Además, prestan una comodidad extrema que te permite llevarlas en tu día a día gracias a su plantilla con tecnología SoftFoam para una pisada adaptable y confortable. La suela con talón más alto agrega un toque atlético al calzado y los apliques BMW en combinación con el logo y los colores de Puma, completan este calzado a la perfección. Además, su silueta moderna, inspirada en la era del “tiburón” de BMW te da toda la onda que tanto te gusta.'
    },

    { 
        id: '12', name: 'Zapatillas Puma Trc Blaze', price: 31499, free_shipping: false, category: 'puma', img:'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw28132a9a/products/PU_384958-01/PU_384958-01-1.JPG', stock: 31, description:'Las Zapatillas Puma Trc Blaze mezclan textiles como malla, cuero y gamuza para brindarte un diseño elegante, donde se destacan sus detalles de TPU que remontan tu look a la década del 90. La mediasuela de EVA mejora la amortiguación y se combina con una suela de goma que aporta tracción en diversas superficies para que puedas recorrer con comodidad y estilo las calles de tu ciudad.'
    },

]

export const getProducts = ( categoryId ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(product => product.category === categoryId) : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 2000)
    })
}