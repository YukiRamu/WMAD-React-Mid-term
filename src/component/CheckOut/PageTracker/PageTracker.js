import './PageTracker.css'

const PageTracker = (props) => {

    return (
        <>
            {/* Page Tracker */}
            <div className='page-tracker'>
                <p id='ship' className='tracker-text'>Shipment</p>
                <div></div>
                <p  id='pay' className='tracker-text'>Payment</p>
            </div>
        </>
    );
}

export default PageTracker;