/**
 * Created by ilya on 14/12/2016.
 */
import React from 'react';
import Menu from './common/Menu';
import ItemList from './common/ItemList';
import axios from 'axios';
//import companies from 'json!../data/Company.json';
import coupons from 'json!../data/Coupon.json';
//import customers from 'json!../data/Customer.json';

class Admin extends React.Component {


    constructor() {
        super();
        this.state = {
            apiLink: ["customers", "company", "customer" ],
            companies: [],
            customers: [],
            errorMessage:''
        };
    }

    componentWillMount(){
        console.log("debug here before fetches");
       this.fetchCompanies();
        this.fetchCustomers();
        console.log("debug here after fetches");
    }

    fetchCompanies(){
        let self = this;
        axios.get('/src/data/Company.json') // '/CouponWebAppPhase2/webapi/admin/companies'
        // '/src/data/Company.json'
            .then(function (response) {
            //    console.log(response.data);
                let data = response.data;
                self.setState({ companies: data
                });
            })
            .catch(function (error) {
                console.log(error.response.data);
                self.setState({errorMessage: error.response.data});
            });
        // $.ajax({
        //     method: 'GET',
        //     url: '/CouponWebAppPhase2/webapi/admin/companies', //      url: '/src/data/Company.json',   url: 'webapi/admin/companies',
        //     success: (companies) => {
        //         this.setState({ companies: companies });
        //         console.log(companies)
        //     }
        // })
        //     .catch(function (error) {
        //                 console.log(error.response.data);
        //                 self.setState({errorMessage: error.response.data});
        //              });
        // ;
    }
    fetchCustomers(){
        let self = this;
        axios.get('/src/data/Customer.json')// '/CouponWebAppPhase2/webapi/admin/customers'
        //'/src/data/Customer.json'
            .then(function (response) {
             //   console.log(response.data);
                let data = response.data;
                self.setState({ customers: data
                });
            })
            .catch(function (error) {
                console.log(error.response.data);
                self.setState({errorMessage: error.response.data});
            });
        // $.ajax({
        //     method: 'GET',
        //     url: '/CouponWebAppPhase2/webapi/admin/customers',// url: '/src/data/Customer.json',  OR   url: '/webapi/admin/customers',
        //     success: (customers) => {
        //         this.setState({ customers: customers });
        //         console.log(customers)
        //     }
        // })
        //     .catch(function (error) {
        //         console.log(error.response.data);
        //         self.setState({errorMessage: error.response.data});
        //     });
        // ;
    }

    deleteCompany(companyId) {

        const companies = this.state.companies.filter(
            company => company.id !== companyId
        );
        this.handleCompanyDeleteServer(companyId);
        this.setState({ companies: companies });
    }
    handleCompanyDeleteServer(id){
        axios({
            method: 'delete',
            url: '/CouponWebAppPhase2/webapi/admin/companies/'+id,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deleteCustomer(customerId) {
        const customers = this.state.customers.filter(
            customer => customer.id !== customerId
        );
        this.handleCustomerDeleteServer(customerId);
        this.setState({ customers: customers });
    }
    handleCustomerDeleteServer(id){
        axios({
            method: 'delete',
            url: '/CouponWebAppPhase2/webapi/admin/customers/'+id,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderCompaniesLists(companiesData){
        //const  data=
            return (<div>
                <h1>Companies</h1>
                {this.renderCompanyForm()}
            <ItemList deleteCompany={this.deleteCompany.bind(this)} companies={companiesData} />
            </div>);
       // return data;
    }


    renderCustomersLists(customersData) {
        return (<div>
            <h1>Customers</h1>
            <ItemList deleteCustomer={this.deleteCustomer.bind(this)} customers={customersData} />
        </div>);
    }

    render() {
        const listItems = this.renderCompaniesLists(this.state.companies);
        const listItems2 = this.renderCustomersLists(this.state.customers);
        return (
            <div>
                <Menu dataOne={listItems} dataTwo={listItems2} clientType="Admin"  />
            </div>

        );
    }

    renderCompanyForm() {
    //TODO
        return (
            <div>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bs-admin-modal-lg">Create Company</button>
                <div className="modal fade bs-admin-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="companyform">
                    <div className="modal-dialog modal-lg" >
                        <div className="modal-content">
                            Create Company form
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;

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
