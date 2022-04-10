import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.3em;
    text-align: center;
    color: #039be5;
`;

const List = styled.ul`
    text-align: center;
    color: #039be5;
`;
const ListItem = styled.li`
    height: 20px;
    display: flex;
    justify-content: space-between;
    :not(:last-of-type) {
        margin-bottom: 10px;
    }
    color: black;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    flex-direction: column;
    margin: 5px auto;
`;

const SpanName = styled.span`
    margin-right: 16px;
`;

const Input = styled.input`
    margin-left: 20px;
`;

const Button = styled.button`
    width: 100px;
    margin: 8px auto;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: #039be5;
        color: #fff;
    }
`;
const BtnDelete = styled.button`
    height: 20px;
    margin-top: 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: #039be5;
        color: #fff;
    }
`;
const Text = styled.p`
    text-align: center;
`;

export {
    Text,
    Title,
    Form,
    Wrapper,
    SpanName,
    Input,
    Button,
    List,
    ListItem,
    BtnDelete,
};
