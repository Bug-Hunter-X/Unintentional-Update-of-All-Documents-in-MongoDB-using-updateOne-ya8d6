# MongoDB updateOne Without Filter Bug

This repository demonstrates a common error in MongoDB update operations using the `updateOne` method without a proper filter. This can lead to unintended updates to all documents in the collection.

## Bug Description
The `updateOne` method in MongoDB requires a filter to specify which document(s) should be updated.  Without a filter, it defaults to updating a single document, but if no document matches the filter, it creates one. This example demonstrates the latter by applying an update to an empty collection.

## Solution
The correct implementation requires a proper filter to target specific documents for update. The filter can be based on any field(s) in the document.
