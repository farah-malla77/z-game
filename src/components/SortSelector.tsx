import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectedOrder : (order : string) => void;
    selectedOrder: string;
}
const SortSelector = ({onSelectedOrder, selectedOrder}: Props) => {
    const sortOrders = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Data added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'rating', label:'Average rating'},
    ]
    const getSelectedOrder = sortOrders.find(o => o.value == selectedOrder)
    
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: { selectedOrder ? getSelectedOrder?.label : 'Relevance' }
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={()=> onSelectedOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector