import {
    AddressLinked as AddressLinkedEvent,
    AddressUnlinked as AddressUnlinkedEvent
} from '../types/AccountRegistryLogic/AccountRegistryLogic'
import { AddressLinked, AddressUnlinked } from '../types/schema'

export function handleAddressLinked(event: AddressLinkedEvent): void {
  let addressLinked = new AddressLinked(event.params.currentAddress.toHexString());

  addressLinked.currentAddress =  event.params.currentAddress;
  addressLinked.newAddress =  event.params.newAddress;
  addressLinked.linkId =  event.params.linkId;
  addressLinked.transactionHash = event.transaction.hash;
  addressLinked.timestamp = event.block.timestamp;
  addressLinked.save();
}

export function handleAddressUnlinked(event: AddressUnlinkedEvent): void {
  let addressUnlinked = new AddressUnlinked(event.params.addressToRemove.toHexString());

  addressUnlinked.addressToRemove =  event.params.addressToRemove;
  addressUnlinked.transactionHash = event.transaction.hash;
  addressUnlinked.timestamp = event.block.timestamp;
  addressUnlinked.save();
}
