import { useCombobox } from 'downshift';
import { useEffect, useState } from 'react';

const Search = ({ setProduct, productType, products }) => {
	const [inputItems, setInputItems] = useState([]);

	useEffect(() => {
		if (products && products.length > 0) {
			setInputItems(
				products.map((product) => {
					return { id: product.id, label: product.name || product.title };
				})
			);
		} else {
			return setInputItems([{ id: 1, label: 'Not found' }]);
		}
	}, [products]);

	const {
		isOpen,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		items: inputItems,
		itemToString: (item) => (item ? item.label : ''),
		onInputValueChange: ({ inputValue }) => {
			inputValue ? setProduct(inputValue) : setProduct('a');
			setInputItems(
				inputItems.filter((item) => {
					return item.label.toLowerCase().startsWith(inputValue.toLowerCase());
				})
			);
		},
	});
	return (
		<section className='search-container'>
			<div className='container '>
				<div className='relative my-5'>
					<input
						{...getInputProps()}
						className='w-full p-2 border rounded form-control mx-auto border border-dark border-3'
						placeholder={`Search ${productType}`}
					/>
					<ul
						{...getMenuProps()}
						className={`${
							isOpen ? 'block' : 'hidden'
						} w-full mx-auto rounded bg-white`}
					>
						{isOpen &&
							inputItems.map((item, index) => (
								<>
									{index < 4 && (
										<li
											{...getItemProps({ item, index })}
											key={item.id}
											className={`p-2 ${
												highlightedIndex === index ? 'bg-gray-200' : ''
											}`}
										>
											{item.label}
										</li>
									)}
								</>
							))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Search;
