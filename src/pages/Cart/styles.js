import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const ContainerList = styled.ul`
    width:100%;
    background-color: #fff;
    flex-direction: column;
    justify-content:center;
    border-radius: 5px;
    padding: 36px 44px;
    align-items:center;
    margin-top: 45px;
    max-width:958px;

`;
export const TravelItem = styled.li`
    width:100%;  
    display:flex;  
    margin-bottom: 10px;  
    padding: 10px 0;  
    border-bottom: 1px solid #666;
    justify-content: space-between;
    align-items:center;

    img{
        height: 100px;

    }
`;
export const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-ites:center;
    justify-content:center;

    p{
        font-size:14px;
        font-weight:600;        
    }

    strong{
        margin-top:10px;
        font-size:16px;
    }
`;
export const Quantity = styled.input`
    font-size:16px;
    color: #666;
    padding: 6px;
    border-radius: 5px;
    width:40px;
    height:40px;
    border: 1px solid #0676D9;
    text-align: center;s
`;
export const Subtotal = styled.div`
    display:flex;
    font-weight:600;
    font-size:16px;
    align-items: right;

    p{
        margin-right:10px;
    }

`;

export const TotalPrice = styled.div`
    font-weight:600;
    max-width:958px;
    font-size:16px;
    justify-content:flex-end;
    align-items: center;
    background-color: #fff;
    display:flex;
    padding: 20px;
    padding-right: 82px;
    gap:20px;
`;
