import clsx from 'clsx';

/**
 *
 * @param {Object} props
 * @param {String} props.placeholder
 * @param {Boolean} props.isInvalid
 * @param {String} props.name
 * @param {Boolean} props.required
 * @param {String} props.defaultValue
 * @returns {JSX.Element}
 */

export const TextField = ({
  placeholder,
  isInvalid,
  name,
  required,
  defaultValue,
}) => {
  return (
    <div className="relative flex min-w-80 flex-1 items-center">
      {isInvalid && (
        <span className="absolute right-4 text-red text-body-l">
          Can't be empty
        </span>
      )}
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={clsx(
          'w-full rounded-[4px] border border-medium-grey/25 py-2 pl-4 text-body-l',
          { 'border-red pr-32': isInvalid, 'pr-4': !isInvalid }
        )}
      />
    </div>
  );
};
