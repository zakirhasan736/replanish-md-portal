import { Card } from 'antd';
const Stories = (props) => {
    return (
        <div className='story-card-content'>
            <Card  style={{
                background: `url("${props.background}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }} className="story-card">
                {props.indexNumber == 0 ? <div>
                    <img src="/icons/addupload.svg" width="35" height="35" style={{cursor: 'pointer'}} />
                </div> : <h6 className='story-title'>{props.title}</h6>}
            </Card>
        </div>
    );
}

export default Stories;