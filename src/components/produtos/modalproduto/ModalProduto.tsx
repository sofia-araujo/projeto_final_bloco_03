import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormProduto from '../formproduto/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-indigo-700 transition'>
                        Novo Produto
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;