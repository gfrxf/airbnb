import styled from "styled-components";




export const DemoWrapper = styled.div`
overflow: hidden;
.list{
    overflow: hidden;
    width: 100px;
    display: flex;
    > *{
        flex-shrink: 0;
    }
}
`