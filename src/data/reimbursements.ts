export interface Reimbursement {
    id: string;
    merchant: string;
    amount: string;
    currency: string;
    status: string;
}

const reimbursements: Reimbursement[] = [
    {
        id: '1',
        merchant: 'walmart',
        amount: '9,900 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '2',
        merchant: 'Amazon',
        amount: '5,100 SGD',
        currency: 'SGD',
        status: 'Approval Pending',
    },
    {
        id: '3',
        merchant: 'Google',
        amount: '6,300 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '4',
        merchant: 'Grab',
        amount: '200 SGD',
        currency: 'SGD',
        status: 'Draft',
    },
    {
        id: '5',
        merchant: 'Paytm',
        amount: '600 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '6',
        merchant: 'Uber',
        amount: '1,200 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '7',
        merchant: 'Netflix',
        amount: '800 SGD',
        currency: 'SGD',
        status: 'Draft',
    },
    {
        id: '8',
        merchant: 'Apple',
        amount: '3,500 SGD',
        currency: 'SGD',
        status: 'Approval Pending',
    },
    {
        id: '9',
        merchant: 'Facebook',
        amount: '7,800 SGD',
        currency: 'SGD',
        status: 'Approval Pending',
    },
    {
        id: '10',
        merchant: 'Microsoft',
        amount: '2,100 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '11',
        merchant: 'Tesla',
        amount: '4,500 SGD',
        currency: 'SGD',
        status: 'Draft',
    },
    {
        id: '12',
        merchant: 'Spotify',
        amount: '1,800 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
    {
        id: '13',
        merchant: 'Adobe',
        amount: '3,200 SGD',
        currency: 'SGD',
        status: 'Approval Pending',
    },
    {
        id: '14',
        merchant: 'Slack',
        amount: '2,700 SGD',
        currency: 'SGD',
        status: 'Draft',
    },
    {
        id: '15',
        merchant: 'Zoom',
        amount: '900 SGD',
        currency: 'SGD',
        status: 'Approved',
    },
];
  
export default reimbursements;
