import styled from "styled-components";

export const PaginationWrapper = styled.div`
display: flex;
justify-content: center;
.info{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-page{
        margin: 0 10px;
        &hover{
            text-decoration: underline;
        }

    }
    .MuiPaginationItem-icon{
        font-size: 18px;
    }
    .MuiPaginationItem-page.Mui-selected{
        background-color: #222;
        color: #fff;
    }
    .desc{
        margin-top: 16px;
        color: #222;
    }
}
`