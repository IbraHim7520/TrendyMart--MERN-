import React from 'react';
import UploadProductForm from "../../../Forms/UploadProductForm"
const ProductManagement = () => {
    const openModal = () =>{
        const modal = document.getElementById("my_modal_5")
        modal.showModal()
    }
    return (
        <div className='p-5'>
            <div className='bg-white p-5 w-full'>
                <button onClick={openModal} className='btn w-full btn-primary text-white btn-sm lg:btn-lg xl:btn '>Add a new product</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <UploadProductForm></UploadProductForm>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
        </div>
    );
};

export default ProductManagement;