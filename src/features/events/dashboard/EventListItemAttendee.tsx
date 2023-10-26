import { Image, List } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

type Props = {
    attendee: Attendee
}

export default function EventListItemAttendee({attendee}: Props) {
  return (
      <div>
          <List.Item>
              <Image size="mini" src={attendee.photoURL} circular />
          </List.Item>
    </div>
  )
}
