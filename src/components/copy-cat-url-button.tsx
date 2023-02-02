import * as React from "react";
import {Button, Icon,} from "@chakra-ui/react";
import {FaCopy} from "react-icons/fa";

const CopyCatUrlBtn = ({}): JSX.Element => {

    function copyUrl() {
        navigator.clipboard.writeText(location.href);
    }


    return (
        <Button
            colorScheme="blue"
            onClick={() => copyUrl()}>
            <Icon as={FaCopy}/>
        </Button>
    );
};

export default CopyCatUrlBtn;
