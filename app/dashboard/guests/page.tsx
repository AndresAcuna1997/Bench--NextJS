import { getGuestList } from '@/utils/attendes';
import { getCurrentUser } from '@/utils/users'

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guests = await getGuestList(user.id)

  return (
    <div>
      {guests.map((guest) => (
        <div key={guest.id}>{guest.name}</div>
      ))}
    </div>
  )
}

export default GuestsPage
