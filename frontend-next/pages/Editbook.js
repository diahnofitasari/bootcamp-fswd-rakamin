"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";

export default function EditBookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        try {
          const response = await getBookDetailById(id);
          setBook(response.book);
        } catch (e) {
          console.log(e);
        }
      };
      fetchBook();
    }
  }, [id]);

  return (
    <Box>
      <BookForm bookData={book} />
    </Box>
  );
}
