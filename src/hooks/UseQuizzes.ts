import { useEffect, useState } from 'react'
import { AppDispatch, QuizBody } from '../redux/types'
import { useDispatch } from 'react-redux'
import { getAllQuizes } from '../redux/quizes/operations'

interface UseQuizzesHook {
    quizzes: QuizBody[]
    loading: boolean
    error: string | null
}

const UseQuizzes = (ageGroupe?: string): UseQuizzesHook => {
    const dispatch = useDispatch<AppDispatch>()
    const [quizzes, setQuizzes] = useState<QuizBody[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchAllQuizzes = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await dispatch(
                    getAllQuizes({ page: 1, pageSize: 10 })
                )
                if (getAllQuizes.fulfilled.match(data)) {
                    setQuizzes(data.payload)
                }
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setLoading(false)
            }
        }
        fetchAllQuizzes()
    }, [ageGroupe, dispatch])
    return { quizzes, loading, error }
}

export default UseQuizzes
