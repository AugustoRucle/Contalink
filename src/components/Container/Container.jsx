import React from 'react';

function Container(props) {
    return <section className="container pt-4">
        {props.children}
    </section>
}

export default Container;