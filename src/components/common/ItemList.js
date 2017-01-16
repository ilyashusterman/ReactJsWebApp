/**
 * Created by ilya on 21/12/2016.
 */
import React from 'react';
import {Modal} from 'react-bootstrap';

class ItemList extends React.Component {

    constructor(){
        super();
    }

    companyRemove(id){
        console.log("remove company with id : "+id);
        this.props.deleteCompany(id);
    }
    companyEdit(company){
        console.log("edit!" + company.compName);
        this.props.editCompany(company);
    }
    renderResponseServer(){
        let responseServ = '';
        let isResponse = this.props.serverResponse!='';

        if(isResponse){ //TODO ! this.props.serverResponse dassaasdada
            responseServ =
                 <Modal.Body>{this.props.serverResponse}</Modal.Body>

        }
        responseServ;
    }
    renderCompanies(companies){
        const  data= companies.map(company =>
            <div  key={company.id} className="col-md-3">
                <div className="row-fluid">
                    <div className="span3 PlanPricing template4">
                        <div className="planName"> <span className="price">{company.password}</span>
                            <h3>{company.compName}</h3>
                            <p>ID : {company.id}</p>
                        </div>
                        <div className="planFeatures">
                            <ul>
                                <li>Company Email : {company.email}</li>
                            </ul>
                        </div>
                        <div>  <button type="button" className="btn btn-danger" data-toggle="modal" data-target={".bs-example-modal-lg"+company.id}>Remove</button></div>
                        {/*<p> <button onClick={this.companyRemove.bind(this, company.id)} type="button" className="btn btn-danger" >Remove</button> </p>*/}
                        <p> <button onClick={this.companyEdit.bind(this,company)} className="btn btn-info">Edit</button> </p>
                    </div>
                </div>
                <div className={"modal fade "+"bs-example-modal-lg"+company.id} key={company.id} role="dialog" >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            Are you sure ?
                            <button  data-dismiss="modal" onClick={this.companyRemove.bind(this, company.id)} type="button" className="btn btn-danger" > Remove</button>
                        </div>
                    </div>
                </div>
                {this.renderResponseServer()}
            </div>
        );
        return data;
    }

    customerRemove(id){
        console.log("remove company with id : "+id);
        this.props.deleteCustomer(id);
    }
    customerEdit(customer){
        console.log("edit!" + customer.custName);
    }

    renderCustomers(customers){
        const  data= customers.map(customer =>
            <div  key={customer.id} className="col-md-3">
                <div className="row-fluid">
                    <div className="span3 PlanPricing template4">
                        <div className="planName"> <span className="price">{customer.password}</span>
                            <h3>{customer.custName}</h3>
                            <p>ID : {customer.id}</p>
                        </div>
                        <div className="planFeatures">
                            <ul>

                                <li>{customer.custName} - Customer</li>

                          </ul>
                        </div>

                        <p> <button onClick={this.customerRemove.bind(this, customer.id)} type="button" className="btn btn-danger" >Remove</button> </p>
                        <p> <button onClick={this.customerEdit.bind(this, customer)} className="btn btn-info">Edit</button> </p>
                    </div>
                </div>
            </div>
        );
        return data;
    }

    renderCoupons(coupons) {
        const  data= coupons.map(coupon =>
            <div  key={coupon.id} className="col-md-3">
                <div className="row-fluid">
                    <div className="span3 PlanPricing template4">
                        <div className="planName"> <span className="price">${coupon.price}</span>
                            <h3>{coupon.title}</h3>
                            <p>{coupon.endDate}</p>
                        </div>
                        <div className="planFeatures">
                            <ul>
                                <li>Image {coupon.imgPath}</li>
                                <li>{coupon.amount} Coupons Left!</li>
                                <li>{coupon.type} Category</li>
                                <li>{coupon.massage}</li>
                            </ul>
                        </div>
                        <p> <a href="#Signup" role="button" data-toggle="modal" className="btn btn-success">Choose Fart </a> </p>
                    </div>
                </div>
            </div>
        );
        return data;
    }
    renderCouponsOfCompany(coupons) {
        const  data= coupons.map(coupon =>
            <div  key={coupon.id} className="col-md-3">
                <div className="row-fluid">
                    <div className="span3 PlanPricing template4">
                        <div className="planName"> <span className="price">${coupon.price}</span>
                            <h3>{coupon.title}</h3>
                            <p>{coupon.endDate}</p>
                        </div>
                        <div className="planFeatures">
                            <ul>
                                <li>Image {coupon.imgPath}</li>
                                <li>{coupon.amount} Coupons Left!</li>
                                <li>{coupon.type} Category</li>
                                <li>{coupon.massage}</li>
                            </ul>
                        </div>
                        <p> <a href="#Signup" role="button" data-toggle="modal" className="btn btn-success">Choose Fart </a> </p>
                    </div>
                </div>
            </div>
        );
        return data;
    }

    render() {
        let listItems = null;
        if(this.props.companies!=null){
            listItems=this.renderCompanies(this.props.companies);
        }else if(this.props.customers!=null){
            listItems=this.renderCustomers(this.props.customers);
        }else if (this.props.couponsCustomers!=null){
            listItems=this.renderCoupons(this.props.couponsCustomers);
        }else if (this.props.coupons!=null){
            listItems=this.renderCouponsOfCompany(this.props.coupons);
        }
        return (
            <div>
                {listItems}
            </div>

        );
    }


}

export default ItemList;

/*
 { companies.map(company =>
 <div  key={company.id} className="col-md-3">
 <div className="row-fluid">
 <div className="span3 PlanPricing template4">
 <div className="planName"> <span className="price">$99</span>
 <h3>{company.compName}</h3>
 <p>Monthly Plan</p>
 </div>
 <div className="planFeatures">
 <ul>

 <li>aasdasdassddasd</li>

 </ul>
 </div>
 <p> <a href="#Signup" role="button" data-toggle="modal" className="btn btn-success">Choose Fart </a> </p>
 </div>
 </div>
 </div>
 )}
 */