import { Bounce, toast } from "react-toastify";

const getStoredData = () => {
    const storedData = localStorage.getItem('set-items')
    if(storedData){
        const storedDataStr = JSON.stringify(storedData)
        return storedDataStr;
    }
    else{
        return []
    }
}

const addToCartList = (id) => {
    const storedData = getStoredData();
    if(storedData.includes(id)){
        console.log('already exist' , id)
    }else{
        storedData.push(id);
        const storedListStr = JSON.stringify(storedData)
        localStorage.setItem('set-items' , storedListStr)
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}

export {getStoredData , addToCartList}