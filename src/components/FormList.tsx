import Form from './Form'
type ItemType = {
  name: string
}
type FormListProps = {
  title: string;
  items: ItemType[]
}

const FormList: React.FC<FormListProps> = ({ title, items }) => {
  return (
    <>
      <p className='text-center'>{title}</p>
      {items.map((item) => <Form title={title} item={item} key={item.name}/>)}
    </>
  );
}

export default FormList