import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarocel from '../BrandCarocel/BarndCarocel/BrandCarocel';



const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>find us on</h5>
                <ListGroup>
                     <ListGroup.Item className='mb-2'><FaFacebook> </FaFacebook> Facebook</ListGroup.Item>
                     <ListGroup.Item className='mb-2'><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                     <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                     <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                     <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                 </ListGroup>
                 <div>
                    <BrandCarocel></BrandCarocel>
                 </div>
                
            </div>
        </div>
    );
};

export default RightSideNav;