/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {  Card, Modal, Col, Button, Steps } from 'antd';
  
export default function VioloncelloPratice(){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 15,
        bgcolor: 'midnightblue',
        border: '2px solid #000',
        boxShadow: -10,
        p: 1,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    return(
        <div>
            <Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px', width: '300px'}} onClick={handleOpen}>
                <Col style={{paddingRight: '30px'}}>
                    <img style={{width: '100px', height: '100px', borderRadius: '20px', boxShadow: '0 0 3px 5px', margin: '-15px'}} src='https://d1aeri3ty3izns.cloudfront.net/media/19/194329/1200/preview.jpg' alt='violinoprati'/>
                </Col>
                <div style={{paddingRight: '30px'}}>
                Notes Mirror Cello!
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Card sx={style}>
                    <Col style={{paddingLeft: '223px'}} span={20}>
                    <Card style={{margin: '-130px', width: '300px'}}>
                        <Col style={{float: 'left', paddingLeft: '100px'}}>
                        <Steps style={{color: 'Highlight', CardShadow: '0 0 20px 10px'}}>Cello Notes Positions</Steps>
                        <br/><br/>
                        <img style={{height: '450px', CardShadow: '0 0 10px 20px'}} src='https://i.pinimg.com/originals/41/92/4b/41924b3b7942334556f7a2d0588c8d67.jpg' alt='positionnotescello'/>
                        </Col>
                    </Card>
                    </Col>
                </Card>
            </Modal>
        </div>
    )
}