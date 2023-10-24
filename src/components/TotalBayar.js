import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import numberWithCommas from "../utils/(.)";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/Constans";


export default class TotalBayar extends Component {
  submitTotalBayar = (TotalBayar) =>{
    const pesanan = {
      total_bayar : TotalBayar ,
      menus : this.props.keranjangs
    }

    axios.post( API_URL+'pesanans', pesanan ).then((res) =>{
      this.props.history.push('/sukses')
    })

  };
  
  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-5 ">
            <p className="text-danger fst-italic">*klik hasil yang dipesan untuk memberi keterangan&pembatalan pesanan</p>
            <h4>
              {" "}
              Total Harga :{" "}
              <strong className="float-md-end">
                Rp. {numberWithCommas(TotalBayar)}
              </strong>{" "}
            </h4>
            <div className="d-grid gap-2 mb-5 ml-5 mt-3">
              <Button variant="primary" size="lg" onClick={ () => this.submitTotalBayar(TotalBayar) } >
                <FontAwesomeIcon icon={faShoppingCart} />
                <strong> Bayar</strong>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
