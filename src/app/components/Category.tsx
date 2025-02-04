interface CategoryProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
}

export const Category = ({ categories, onSelectCategory }: CategoryProps) => {
    return (
        <div className="flex gap-4 overflow-x-auto p-4 bg-gray-100">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className="px-4 py-2 bg-white shadow-md rounded-lg hover:bg-gray-200"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
