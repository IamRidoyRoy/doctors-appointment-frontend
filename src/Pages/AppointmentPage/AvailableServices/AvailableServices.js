import { format } from 'date-fns';

const AvailableServices = ({ selected }) => {

    return (
        <div className='my-4'>
            <p className='text-center text-primary font-bold'>Available Services on {format(selected, 'PP')}</p>
            <div>
                <p className='text-center'>Please select a service.</p>
            </div>
        </div>
    );
};

export default AvailableServices;