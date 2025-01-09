interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard: React.FC<UserCardProps> = ({name='Guest', age=30, role='Viewer'}) => {
    return (
        <div>
            <h2>Hello {name} you are {age} years old and your role is {role}</h2>
        </div>
    )
}
export default UserCard;