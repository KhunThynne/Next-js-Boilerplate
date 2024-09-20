import { Input } from '@nextui-org/input';
import { MdSearch } from 'react-icons/md';

export default function SearchInput() {
  return (
    <div className="

  "
    >
      <Input

        isClearable
        radius="lg"
        classNames={{
          label: 'text-black/50 dark:text-white/90 ',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'w-full',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focus=true]:bg-default-200/50',
            'dark:group-data-[focus=true]:bg-default/60',
            '!cursor-text',
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <MdSearch className="text-2xl" />
        }
      />
    </div>
  );
}
