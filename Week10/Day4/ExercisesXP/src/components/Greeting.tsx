interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting: React.FC<GreetingProps> = (props) => {
    const { name, messageCount } = props;
    return (
        <div>
            <h2>Hello {name} you have {messageCount} unread messages</h2>
        </div>
    )
}
export default Greeting;