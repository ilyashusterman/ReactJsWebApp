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
        axios.get('/src/data/Company.json') //TODO debug '/CouponWebAppPhase2/webapi/admin/companies'
            .then(function (response) {
                let data = response.data;
                self.setState({ companies: data
                });
            })
            .catch(function (error) {
                console.log(error.response.data);
                self.setState({errorMessage: error.response.data});
            });
    }
    fetchCustomers(){
        let self = this;
        axios.get('/src/data/Customer.json')//TODO '/CouponWebAppPhase2/webapi/admin/customers'
            .then(function (response) {
                let data = response.data;
                self.setState({ customers: data
                });
            })
            .catch(function (error) {
                console.log(error.response.data);
                self.setState({errorMessage: error.response.data});
            });
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
                //TODO 1 give admin message deleted successfully
            })
            .catch(function (error) {
                console.log(error);
                //TODO  2 give admin message deleted NOT successfully
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
                //TODO  3 give admin message deleted successfully
            })
            .catch(function (error) {
                console.log(error);
                //TODO 4  give admin message deleted NOT successfully
            });
    }

    editCompany(company){
        //TODO
    }

    renderCompaniesLists(companiesData){
        //const  data=
            return (<div>
                <h1>Companies</h1>
                {this.renderCompanyForm()}
            <ItemList deleteCompany={this.deleteCompany.bind(this)} editCompany={this.editCompany.bind(this)} companies={companiesData} />
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
        const companies = this.renderCompaniesLists(this.state.companies);
        const customers = this.renderCustomersLists(this.state.customers);
        return (
            <div>
                <Menu dataOne={companies} dataTwo={customers} clientType="Admin"  />
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
                            {/*TODO company form make*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;


