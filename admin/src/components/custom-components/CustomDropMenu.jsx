import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export function CustomDropMenu({ trigger, label, menuItems, menuGroups }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuGroup>
          {menuItems &&
            menuItems.map((menuItem, idx) => (
              <DropdownMenuItem key={menuItem.id ?? idx} disabled={menuItem.disabled}>
                <>
                  {menuItem.name}
                  {menuItem.shortcut && <DropdownMenuShortcut>{menuItem.shortcut}</DropdownMenuShortcut>}
                </>
              </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
        {menuGroups?.length &&
          menuGroups.map((nestedMenuItems) => (
            <>
              {menuItems && <DropdownMenuSeparator />}
              {nestedMenuItems.map((menuItem, idx) => (
                <DropdownMenuGroup key={menuItem.id ?? idx} onClick={menuItem.onClick}>
                  <DropdownMenuItem disabled={menuItem.disabled}>
                    <>
                      {menuItem.name}
                      {menuItem.shortcut && <DropdownMenuShortcut>{menuItem.shortcut}</DropdownMenuShortcut>}
                    </>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              ))}
            </>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
