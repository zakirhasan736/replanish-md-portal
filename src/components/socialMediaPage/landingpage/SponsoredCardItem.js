import { Avatar, Divider,} from 'antd';

const SponsoredCardItem = (props) => {
    return (
        <>
        <div className='sponsored-card-item'>
            <div className='avatar-image'><Avatar shape="square" size={68} icon={<img src={props.icon} />} /></div>
              <div className='card-cont-text'>
              <div>{props.heading && <h4 className='title'>{props.heading}</h4>}</div>
              <div >{props.link && <span className='subtitle'>{props.link}</span>}</div>
              </div>
            </div>
            <Divider style={{ margin: "15px 0px" }} />
        </>
    );
}

export default SponsoredCardItem;