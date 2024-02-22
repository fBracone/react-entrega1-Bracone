import {collection, getDocs, getFirestore, query, where, doc, getDoc, addDoc, updateDoc} from 'firebase/firestore';

const getDocuments =(collName, filter)=>{
    const db = getFirestore();
    const collRef = collection(db,collName);

    let q = null;
    if(filter){
        q = query(collRef, where("category","==", filter));
    }
    const docs = filter? q : collRef
    return getDocs(docs).then((snapshot)=>{
        return snapshot.docs.map(doc=> ({id:doc.id, ...doc.data()}));        
    })
}

const errorId =   {
    "id": "",
    "name": "Producto Inexistente",
    "category": "",
    "description": "",
    "price": "",
    "stock": 0,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdnviQh7zw3cPSUP-BlniN2eoS3H9dRHUuw&usqp=CAU"
};

const getOneDocument = (collName,id) =>{
    const db = getFirestore();
    const docRef = doc(db, collName, id);

    return getDoc(docRef).then((snapshot)=>{
        return snapshot.exists()? {id:snapshot.id, ...snapshot.data()}: errorId ;
    })
    
}
const updateItemStock =(id,change)=>{
    const db = getFirestore();
    const docRef = doc(db, "items", id);

    getDoc(docRef).then((snapshot)=>{
    const newStock =snapshot.data().stock + change;
    updateDoc(docRef,{stock:newStock})
    })
}
const sendPurchase =(purchase)=>{
    console.log(purchase)
    const db = getFirestore();
    const collRef = collection(db,"orders");
    return addDoc(collRef,purchase)
    .then(res=>{
        for(const item of purchase.items){
        const change = item.quantity * -1;    
        updateItemStock(item.id, change)
        
    } return res.id})
    .catch(err =>{console.error(err)});
}

export {getDocuments , getOneDocument, sendPurchase} ;